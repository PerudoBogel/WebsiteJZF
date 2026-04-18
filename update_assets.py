import os
import json

IMAGE_DIR = './images'
DATA_FILE = './js/data.js'
DETAILS_FILE = './js/detail_data.js'
EXTENSIONS = ('.jpg', '.jpeg', '.png', '.gif', '.webp')

def generate_data():
    tree = {}  # Struktura do data.js
    details = {}  # Szczegóły do detail_data.js
    
    if not os.path.exists(IMAGE_DIR):
        os.makedirs(IMAGE_DIR)
        return

    # Poziom 1: Główne kategorie
    categories = sorted([d for d in os.listdir(IMAGE_DIR) if os.path.isdir(os.path.join(IMAGE_DIR, d))])

    for cat in categories:
        cat_path = os.path.join(IMAGE_DIR, cat)
        tree[cat] = []
        
        # Poziom 2: Podfoldery (konkretne galerie)
        galleries = sorted([d for d in os.listdir(cat_path) if os.path.isdir(os.path.join(cat_path, d))])
        
        for gal in galleries:
            gal_path = os.path.join(cat_path, gal)
            images = sorted([f for f in os.listdir(gal_path) if f.lower().endswith(EXTENSIONS)])
            
            # Pobieranie pierwszego zdjęcia na okładkę
            cover = images[0] if images else None
            
            # Dodaj do spisu w data.js
            tree[cat].append({
                "name": gal,
                "cover": cover
            })
            
            # Pobieranie opisu
            description = ""
            opis_path = os.path.join(gal_path, 'opis.txt')
            if os.path.exists(opis_path):
                with open(opis_path, 'r', encoding='utf-8') as f:
                    description = f.read()
            
            # Klucz detali to "Kategoria/Galeria" dla unikalności
            details[f"{cat}/{gal}"] = {
                "description": description,
                "images": images
            }

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        f.write(f"const galleryCatalog = {json.dumps(tree, indent=4, ensure_ascii=False)};")

    with open(DETAILS_FILE, 'w', encoding='utf-8') as f:
        f.write(f"const galleryDetails = {json.dumps(details, indent=4, ensure_ascii=False)};")
    
    print("Zaktualizowano bazę danych galerii.")

if __name__ == "__main__":
    generate_data()
