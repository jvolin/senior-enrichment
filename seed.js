const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

const campuses = [
  {
    campusName: 'Mountainville Campus',
    photo: 'http://cdn.demo.fabthemes.com/kansas/files/2012/08/wallpaper-722590cp.jpg',
    description: 'The air without is impregnated with raindew moisture, life essence celestial, glistening on Dublin stone there under starshiny coelum. God’s air, the Allfather’s air, scintillant circumambient cessile air. Breathe it deep into thee. By heaven, Theodore Purefoy, thou hast done a doughty deed and no botch! Thou art, I vow, the remarkablest progenitor barring none in this chaffering allincluding most farraginous chronicle',

  },
  {
    campusName: 'Beachtown Campus',
    photo: 'http://images.kuoni.co.uk/73/solana-beach-34389580-1494493023-ImageGalleryLightboxLarge.jpg',
    description: 'Ancient alien vortex helicopter heiroglyph elongated skull sightings, sanskrit mainstream archaelogy I know it sounds crazy…, Earth mound choral castle sky people. Mystery mainstream archaelogy Chariot of the Gods ancient god, otherworldly visitors burmuta triangle aircraft grey flying vessels inter-dimensional space travel, weightless electromagnetic pyramids extraterrestrial origin golden disk.',
  },
  {
    campusName: 'Open Road Remote Campus',
    photo: 'https://performance-portfolio.co.uk/wp-content/uploads/2015/05/Moffat-Drive.jpg',
    description: 'This town deserves a better class of criminal and I’m gonna give it to them. Tell your men they work for me now. This is my city. The first time I stole so that I wouldn’t starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them. I will go back to Gotham and I will fight men Iike this but I will not become an executioner.'
  },
]

const students = [
  {
    firstName: 'Sal',
    lastName: 'Paradise',
    email: 'sal@Paradise.com',
    photo: 'https://s-media-cache-ak0.pinimg.com/originals/94/e5/0c/94e50c1f68601cff089e09edfae1cb02.jpg',
    bio: 'Vet chihuahua play dead husky come leash pomeranian dachshund. Down maltese stay great dance great dance leave it chow chow poodle leash. Release lab poodle fetch st bernard leave it pit bull squirrel fetch, dog bone sit pretty dog fetch. Dog house tennis ball vet pomsky roll over shih tzu, release beagle bring it fetch bite vet kong. Bang squeak toy sit pretty pomeranian spin, husky tail dog bone milk bone st bernard.',
    campusId: 1,
  },
  {
    firstName: 'Dean',
    lastName: 'Moriarty',
    email: 'dean@moriarty.com',
    photo: 'https://thewondrous.com/wp-content/uploads/2015/02/cute-puppies-pics.jpg',
    bio: 'Vet chihuahua play dead husky come leash pomeranian dachshund. Down maltese stay great dance great dance leave it chow chow poodle leash. Release lab poodle fetch st bernard leave it pit bull squirrel fetch, dog bone sit pretty dog fetch. Dog house tennis ball vet pomsky roll over shih tzu, release beagle bring it fetch bite vet kong. Bang squeak toy sit pretty pomeranian spin, husky tail dog bone milk bone st bernard.',
    campusId: 1,
  },
  {
    firstName: 'Chad',
    lastName: 'King',
    email: 'chad@king.com',
    photo: 'https://i.pinimg.com/736x/53/6c/da/536cda87171be8b5187d4248633cbaa8--cute-puppy-pics-cute-puppies.jpg',
    bio: 'Bacon ipsum dolor amet turducken t-bone ball tip shank cupim ribeye jowl pastrami pork belly pork venison chuck hamburger prosciutto corned beef. Shoulder landjaeger pork short ribs, meatball sirloin beef ribs pastrami. Swine shoulder meatball meatloaf bresaola, tail pork alcatra spare ribs. Jowl porchetta andouille sausage pork loin turducken rump turkey salami short loin cupim. Swine pig bresaola, beef shankle porchetta fatback ball tip meatball flank beef ribs filet mignon pork belly burgdoggen biltong. Bresaola cupim picanha landjaeger beef ribs.',
    campusId: 1,
  },
  {
    firstName: 'Carlo',
    lastName: 'Marx',
    email: 'carlo@marx.com',
    photo: 'http://www.bluemaize.net/im/girls-accessories/puppy-hat-11.jpg',
    bio: 'Sit stand catch rottweiler yorkshire terrier, bite chihuahua puppy tennis ball speak beagle sit. Bulldog sit doberman pinscher vet yorkshire terrier poodle, take it release roll over lap dog. Bring it release beagle rottweiler dog bone leap shake. Bang english mastiff puppy bang pit bull speak poodle, tail bulldog play dead dog toy jump. Squirrel pit bull pomeranian maltese bang k9 down stand.',
    campusId: 2,
  },
  {
    firstName: 'Roland',
    lastName: 'Major',
    email: 'roland@major.com',
    photo: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/Puppy-Sailor.jpeg',
    bio: 'Mizzenmast piracy Corsair main sheet coxswain jury mast grog blossom six pounders nipperkin port. Ye ballast code of conduct tender chase guns topgallant avast holystone schooner no prey, no pay. Ye Jolly Roger hail-shot bounty Admiral of the Black code of conduct interloper case shot Sea Legs yardarm.',
    campusId: 2,
  },
  {
    firstName: 'Galatea',
    lastName: 'Dunkel',
    email: 'Galetea@dunkel.com',
    photo: 'http://www.dog-names-and-more.com/images/xgol35k.jpg',
    bio: 'Greyhound bite pomeranian puppies english mastiff chew toy play dead, sit pretty chew toy chew toy kong lap dog bang. Dog bone st bernard dachshund milk bone puppies pit bull, poodle pomsky lap dog pomeranian dog house. Puppies vet pomeranian st bernard stay doberman pinscher st bernard, dog toy lab chow chow leave it bang pomsky release.',
    campusId: 3,
  },
]

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ))
;

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      console.log('hello')
      return null;
    });
};

main();
