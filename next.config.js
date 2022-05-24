
module.exports = {
  reactStrictMode: true,
  
    "presets": ["next/babel"],
 
    env:{
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    },
    
      "rules": {
          "eqeqeq": "off",
          "curly": "error",
          "quotes": ["error", "double"]
      },
      "noInlineConfig": true
}

{
  swcMinify: false // it should be false by default 
  }
 