from flask import Flask, jsonify, request
from flask_cors import CORS

from models.super_hero import SuperHero

app = Flask(__name__)
CORS(app)

batman = SuperHero("Batman", "Conocimiento científico","Plane")
superman = SuperHero("Superman", "Fuerza sobrehumana y capacidad para volar","krypton")
aquaman = SuperHero("Aquaman", "Dominación psiónica de la vida marina","Atlantida")
mujer_maravilla = SuperHero("Mujer Maravilla", "Superhumana y domino de armas", "Isla de Themyscira")

super_heroes = [
    batman,
    superman,
    aquaman,
    mujer_maravilla
]


@app.route('/api/super-hero', methods=['GET'])
def get_super_heroes():
    return jsonify([hero.serialize() for hero in super_heroes])


@app.route('/api/super-hero', methods=['POST'])
def post_super_heroes():
    body = request.json
    print(body)
    name = body['name']
    skill = body['skill']
    origen = body['origen']

    hero = SuperHero(name, skill, origen)
    super_heroes.append(hero)

    return (hero.serialize())


@app.route('/api/super-hero', methods=['PUT'])
def put_super_heroes():

    body = request.json
    name = body['name']
    skill = body['skill']

    for indice, p in enumerate(super_heroes):
        if p.name == name:
           p.skill = skill
    return jsonify([hero.serialize() for hero in super_heroes])


@app.route('/api/super-hero/<name>', methods=['DELETE'])
def delete_super_heroes(name):
    for indice, p in enumerate(super_heroes):
        if p.name == name:
            super_heroes[indice: indice+1] = []
    return jsonify([hero.serialize() for hero in super_heroes])




if __name__ == '__main__':
    app.run()
