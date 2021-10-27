import React from 'react';

const Home = () => {
  const texts = {
    heading: 'Welcome to our page!',
    paragraph1: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Pellentesque tempor ac nisi et facilisis. Vestibulum imperdiet, felis vitae lobortis porta,erat libero tempus arcu, id cursus lectus velit arcu. Phasellus venenatis venenatis elementum.Quisque tristique ipsum ac dui lobortis semper.',
    paragraph2: 'Duis placerat orci ultrices, elementum sem ut, tempus enim. Aenean in nulla mauris. Proin varius efficitur risus, eget gravida est viverra eget. Aenean eleifend laoreet tempor. Donec varius venenatis quam vel rutrum. Aliquam orci nulla, feugiat in dignissim at, ullamcorper ac metus.',
  };

  return (
    <div className="home-details">
      <h2 className="home-title">{texts.heading}</h2>
      <div className="home-para">
        {texts.paragraph1}
        <br />
        <br />
        {texts.paragraph2}
      </div>
    </div>
  );
};

export default Home;
