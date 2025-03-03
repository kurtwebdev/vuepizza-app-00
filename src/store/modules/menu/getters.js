export default {
    getMenuData( state ){
        return state.menuData
    },
    getToppingsArray( state ) {
        const toppingsArray = []
        state.menuData.forEach( element => {
            if ( element.sectionName == 'toppings' ) {
                element.sectionItems.forEach( item => {
                    toppingsArray.push( item )
                } )
            }
        } )  
        return toppingsArray      
    },
    getToppingsNames( state ) {
        const toppingsNames = []
        state.menuData.forEach(element => {
            if ( element.sectionName == 'toppings' ) {
                element.sectionItems.forEach( item => {                    
                    toppingsNames.push( item.title )
                } )
            }
        });
        return toppingsNames        
    },
}