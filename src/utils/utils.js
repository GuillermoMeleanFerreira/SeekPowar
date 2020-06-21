export function formatPrice(nr) {
    var arr = nr.toString().split(".")
    var rev = arr[0].split("").reverse().join("")
    var res = ""
    var i;
    for (i = 0; i < rev.length - 3; i = i + 3) {
        res = rev.slice(i, i + 3) + " " + res
    }
    res = res + rev.slice(i)
    res = res.split("").reverse().join("")
    if (arr[1]) {
        res = res + "," + arr[1]
    }
    return res
}
import { StackActions, NavigationActions } from 'react-navigation';

export function resetStack(navigation, screen) {
    console.log("RESET STACK")
    const resetActionSearch = StackActions.popToTop({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Search' })],
        key: 'SearchStack'
    });
    const resetActionProducts = StackActions.popToTop({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Products' })],
        key: 'ProductsStack'
    });
    const resetActionTrainingMaterials = StackActions.popToTop({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'TrainingMaterials' })],
        key: 'TrainingMaterialsStack'
    });
    navigation.dispatch(
        resetActionSearch
    )
    navigation.dispatch(
        resetActionProducts
    )
    navigation.dispatch(
        resetActionTrainingMaterials
    )
    navigation.navigate(screen)

}


function formatText(text) {
    var separators = ['<dot>', '</dot>'];
    var parts = text.split(new RegExp(separators.join('|'), 'g'))
    console.log(parts)
    for (var i = 1; i < parts.length; i += 2) {
        parts[i] = <Info style={{ fontWeight: 'bold' }}>{parts[i]}</Info>
    }
    return parts;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

