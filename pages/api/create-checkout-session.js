// /* eslint-disable import/no-anonymous-default-export */
// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
// export default async(req, res)=> {
//     const {items,email}=req.body;
//     const transformedItems=items.map(item=>({
//         quantity:1,
//         price_data:{
//             currency:'usd',
//             unit_amount:item.price*100,
//             product_data:{
//                 name:item.title,
//                 images:[item.image]
//             },
//         }
//     }))

//     const session = await stripe.checkout.sessions.create({
//         payment_method_types:["card"],
//         line_items:transformedItems,
//         mode:"payment",
//         success_url:`${process.env.HOST}/success`,
//         cancel_url:`${process.env.HOST}/check_out`,
//         metadata:{
//             email,
//             images:JSON.stringify(items.map(item=>item.image))
//         },

//     })
//     console.log(metadata)
//     res.status(200).json({id:session.id});

//   }

/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async(req, res)=> {
    const {items,email}=req.body;
    const remail=items.map(item=>item.remail)
    const orderData = items.map(item=>JSON.stringify([item.image,item.title]))
    console.log(orderData,'order')
  
    // console.log(items);
    const resname =items.map(item=>item.resname)
    const transformedItems=items.map(item=>({
        quantity:1,
        price_data:{
            currency:'usd',
            unit_amount:item.price*100,
            product_data:{
                name:item.title,
                images:[item.image],
          
            },
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:transformedItems,
        mode:"payment",
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/check_out`,
        metadata:{
            email,
            remail: remail[0],
            resname: resname[0],
            // order:items.map(item=>item),
             order:JSON.stringify(orderData.map(item=>item)),
           
        },
        

    })
    res.status(200).json({id:session.id});

  }
