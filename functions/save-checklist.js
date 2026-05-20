import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Método no permitido" }), { status: 405 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const nombre = formData.get("nombre") || "sin-nombre";
    const posicion = formData.get("posicion") || "sin-posicion";
    const turno = formData.get("turno") || "sin-turno";

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), { status: 400 });
    }

    // Generar nombre del archivo: Braiquin_19-05-2026_14-30.png
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const filename = `${nombre.replace(/\s+/g, "_")}_${day}-${month}-${year}_${hours}-${minutes}.png`;

    // Guardar en Netlify Blobs
    const store = getStore("checklist-pngs");
    const buffer = await file.arrayBuffer();

    await store.set(filename, buffer, {
      metadata: {
        nombre,
        posicion,
        turno,
        timestamp: now.toISOString(),
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        filename,
        message: "Checklist guardado correctamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error en save-checklist:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Error guardando archivo" }),
      { status: 500 }
    );
  }
};
