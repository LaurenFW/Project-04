from app import db
from pony.orm import Required, Set, Optional
from marshmallow import Schema, fields

class Ship(db.Entity):
    company = Required(str)
    ship = Optional(str)
    activities = Required(str)
    image = Required(str)
    cruises = Set('Cruise')
    categories = Set('Category')

class ShipSchema(Schema):
    id = fields.Str(dump_only=True)
    ship = fields.Str(required=True)
    company = fields.Str(required=True)
    image = fields.Str(required=True)
    activities = fields.Str(required=True)
    cruises = fields.Nested('CruiseSchema', many=True, exclude=('ship', 'categories'))
    categories = fields.Nested('CategorySchema', many=True)
