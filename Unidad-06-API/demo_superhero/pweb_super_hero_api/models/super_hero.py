class SuperHero:
    def __init__(self, name, skill, origen="", image=""):
        self.name = name
        self.skill = skill
        self.origen = origen
        self.image = image

    def serialize(self):
        return {
            "name": self.name,
            "skill": self.skill,
            "origen": self.origen,
            "image": self.image,
        }
    

    def __str__(self):
        return 'Nombre: ' + self.name + ' Skill: ' + self.skill + ' Origen: ' + self.origen + ' Image: ' + self.image