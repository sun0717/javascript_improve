let person = {
  name: 'Yoda',
  designation: 'Jedi Master',
};

function trainJedi(jediWarrion) {
  if (jediWarrion.name === 'Yoda1') {
    console.log('No need! already trained');
  }
  console.log(`Training ${jediWarrion.name} complete`);
}

trainJedi(person);
trainJedi({ name: 'Adeel', designation: 'padawan' });
