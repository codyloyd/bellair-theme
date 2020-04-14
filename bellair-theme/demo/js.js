const hello = 'I am never used';

doesNotExist.nope(`I'm never imported`);

const myObject = {
  hello: "world",
  funky: function(){ console.log(this.world) }
}

myObject.funky()

class widget extends React.Component { }

const joe = function () { };

const wes = 100;

function wes() {

}

const wes = () => { };

console.log(joe, wes);
