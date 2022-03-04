const reducer = (state, action) => {

    switch (action.type) {

        case 'REMOVE':
            {
                let items = state.item;
                let data = items.filter((ele, i) => {
                    return i != action.payload;
                })
                return { ...state, item: data, totalItem: data.length };
            }
        case 'CLEAR':
            {
                return { ...state, item: [],totalItem: 0 };
            }
        case 'inc':
            {
                let updated = state.item.map((ele, i) => {
                    let ans = 0;
                    if (i === action.payload) {
                        ele.quantity += 1;


                    }

                    return ele;
                });

                let ans1=updated.reduce((ans,ele)=>{
                    return ans+=ele.quantity;
                },0)
               
                return { ...state, item: updated, totalItem: ans1};


            }
        case 'dec':
            {
                let ans = 0;
                let updated = state.item.map((ele, i) => {

                    if (i === action.payload) {
                        (ele.quantity === 1 ? ans = 1 : ele.quantity -= 1);


                    }
                    return ele;

                });
                if (ans === 1) {
                    let data1 = updated.filter((ele, i) => {
                        return i != action.payload;
                    })
                    let ans1=updated.reduce((ans,ele)=>{
                        return ans+=ele.quantity;
                    },0)
                    return { ...state, item: data1, totalItem: data1.length,totalItem: ans1-1};
                }
                else {
                    let ans1=updated.reduce((ans,ele)=>{
                        return ans+=ele.quantity;
                    },0)
                 
                    return { ...state, item: updated, totalItem: ans1};
                }
            }
            case 'TOTAL': {
                let ans1=state.item.reduce((ans,ele)=>{
                    return ans+=parseInt(ele.price)*ele.quantity;
                },0)

                return {...state,totalAmount:ans1};
            }
        default: {
            return { ...state };
        }
    }
};

export default reducer;