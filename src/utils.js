import _ from "lodash"

export function renderObjectsAsSelectValues(objs) {
    return _.map(objs, obj=> {
        return {'value': `${obj.id}`, 'label': `${obj.name}`}
    })
}

export function renderRecipesAsSelectValues(recipes) {
    return _.map(recipes, recipe=> {
        return {'value': `${recipe.id}`, 'label': `${recipe.title}`}
    })
}