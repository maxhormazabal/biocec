import os
import re
import unicodedata

def limpiar_nombre(nombre):
    # Normalizar tildes
    nombre = unicodedata.normalize("NFD", nombre).encode("ascii", "ignore").decode("utf-8")
    
    # Separar nombre y extensión
    base, ext = os.path.splitext(nombre)

    # Reemplazar espacios por guiones bajos
    base = base.replace(" ", "_")

    # Eliminar puntos que no son la extensión
    base = base.replace(".", "")

    # Eliminar caracteres especiales (excepto guiones bajos y letras/números)
    base = re.sub(r"[^\w_]", "", base)

    return f"{base}{ext.lower()}"

def renombrar_pdfs_y_actualizar_js(ruta_documentos, ruta_js):
    # Diccionario para mapear nombres antiguos -> nuevos
    cambios = {}

    for archivo in os.listdir(ruta_documentos):
        if archivo.lower().endswith(".pdf"):
            nuevo_nombre = limpiar_nombre(archivo)
            if archivo != nuevo_nombre:
                origen = os.path.join(ruta_documentos, archivo)
                destino = os.path.join(ruta_documentos, nuevo_nombre)
                os.rename(origen, destino)
                cambios[archivo] = nuevo_nombre

    # Leer y actualizar documentos.js
    with open(ruta_js, "r", encoding="utf-8") as f:
        contenido = f.read()

    for viejo, nuevo in cambios.items():
        # Reemplazar solo el nombre en la ruta, no el "name"
        contenido = contenido.replace(viejo, nuevo)

    with open(ruta_js, "w", encoding="utf-8") as f:
        f.write(contenido)

    print("Renombramiento y actualización completados.")
    if cambios:
        print("Cambios realizados:")
        for viejo, nuevo in cambios.items():
            print(f"  {viejo} -> {nuevo}")
    else:
        print("No hubo archivos que renombrar.")

# Ejemplo de uso
ruta_docs = "./documentos"
ruta_js = "./documentos.js"
renombrar_pdfs_y_actualizar_js(ruta_docs, ruta_js)
