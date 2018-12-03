const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

  var hum1 = {
      create : function()
      {
            hummus(1);    
      },
      eat : function()
      {
            console.log("yum yum good Hummus");
            hum1.destroy;
      },
      destroy : function()
      {
            console.log("Im all done now")
      }
  }
  console.log(hum1.create());
  console.log(hum1.eat());
  console.log(hum1.destroy());