const db = require('./db');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

const campuses = [
  {
    name: 'Mountainville Campus',
    photo: 'http://cdn.demo.fabthemes.com/kansas/files/2012/08/wallpaper-722590cp.jpg',
    description: 'The air without is impregnated with raindew moisture, life essence celestial, glistening on Dublin stone there under starshiny coelum. God’s air, the Allfather’s air, scintillant circumambient cessile air. Breathe it deep into thee. By heaven, Theodore Purefoy, thou hast done a doughty deed and no botch! Thou art, I vow, the remarkablest progenitor barring none in this chaffering allincluding most farraginous chronicle'
  },
  {
    name: 'Beachtown Campus',
    photo: 'http://images.kuoni.co.uk/73/solana-beach-34389580-1494493023-ImageGalleryLightboxLarge.jpg',
    description: 'Ancient alien vortex helicopter heiroglyph elongated skull sightings, sanskrit mainstream archaelogy I know it sounds crazy…, Earth mound choral castle sky people. Mystery mainstream archaelogy Chariot of the Gods ancient god, otherworldly visitors burmuta triangle aircraft grey flying vessels inter-dimensional space travel, weightless electromagnetic pyramids extraterrestrial origin golden disk.'
  },
  {
    name: 'Open Road Remote Campus',
    photo: 'https://performance-portfolio.co.uk/wp-content/uploads/2015/05/Moffat-Drive.jpg',
    description: 'This town deserves a better class of criminal and I’m gonna give it to them. Tell your men they work for me now. This is my city. The first time I stole so that I wouldn’t starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them. I will go back to Gotham and I will fight men Iike this but I will not become an executioner.'
  },
]

const students = [
  {
    name: 'Sal Paradise',
    email: 'sal@paradise.com',
    photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-5.jpg',
    bio: 'Vet chihuahua play dead husky come leash pomeranian dachshund. Down maltese stay great dance great dance leave it chow chow poodle leash. Release lab poodle fetch st bernard leave it pit bull squirrel fetch, dog bone sit pretty dog fetch. Dog house tennis ball vet pomsky roll over shih tzu, release beagle bring it fetch bite vet kong. Bang squeak toy sit pretty pomeranian spin, husky tail dog bone milk bone st bernard.',
  },
  {
    name: 'Dean Moriarty',
    email: 'dean@moriarty.com',
    photo: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjyx_mqq4TWAhVKxoMKHTKcCRMQjRwIBw&url=http%3A%2F%2Fdogtime.com%2Fpuppies%2F255-puppies&psig=AFQjCNE3rjH02p_S2mMaWswot4iC7l5Jzg&ust=1504367021813189',
    bio: 'Vet chihuahua play dead husky come leash pomeranian dachshund. Down maltese stay great dance great dance leave it chow chow poodle leash. Release lab poodle fetch st bernard leave it pit bull squirrel fetch, dog bone sit pretty dog fetch. Dog house tennis ball vet pomsky roll over shih tzu, release beagle bring it fetch bite vet kong. Bang squeak toy sit pretty pomeranian spin, husky tail dog bone milk bone st bernard.',
  },
  {
    name: 'Carlo Marx',
    email: 'carlo@marx.com',
    photo:'http://cdn.skim.gs/image/upload/v1456344012/msi/Puppy_2_kbhb4a.jpg',
    bio: 'Sit stand catch rottweiler yorkshire terrier, bite chihuahua puppy tennis ball speak beagle sit. Bulldog sit doberman pinscher vet yorkshire terrier poodle, take it release roll over lap dog. Bring it release beagle rottweiler dog bone leap shake. Bang english mastiff puppy bang pit bull speak poodle, tail bulldog play dead dog toy jump. Squirrel pit bull pomeranian maltese bang k9 down stand.',
  },
  {
    name: 'Galatea Dunkel',
    email: 'Galetea@dunkel.com',
    photo: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjRsLzzq4TWAhWiy4MKHcDsD_gQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fexplore%2Fpuppies%2F&psig=AFQjCNE3rjH02p_S2mMaWswot4iC7l5Jzg&ust=1504367021813189',
    bio: 'Greyhound bite pomeranian puppies english mastiff chew toy play dead, sit pretty chew toy chew toy kong lap dog bang. Dog bone st bernard dachshund milk bone puppies pit bull, poodle pomsky lap dog pomeranian dog house. Puppies vet pomeranian st bernard stay doberman pinscher st bernard, dog toy lab chow chow leave it bang pomsky release.',
  },
]


const seed = () =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
  .then(() =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
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
