class SuperHero:
    def __init__(self, name, skill, origen=""):
        self.name = name
        self.skill = skill
        self.origen = origen

    def serialize(self):
        return {
            "name": self.name,
            "skill": self.skill,
            "origen": self.origen,
        }
    

    def __str__(self):
        return 'Nombre: ' + self.name + ' Skill: ' + self.skill + ' Origen: ' + self.origen