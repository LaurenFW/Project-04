from flask import Blueprint
from pony.orm import db_session
from models.Category import Category, CategorySchema

router = Blueprint(__name__, 'categories')

@router.route('/categories', methods=['GET'])
@db_session
def index():

    schema = CategorySchema(many=True)
    categories = Category.select()
    return schema.dumps(categories)
