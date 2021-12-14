import { useState } from 'react';

const initialImages = [
  // 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
  // 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
  // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  // 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  // 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  // 'https://media.istockphoto.com/photos/two-hand-in-a-pop-art-collage-style-in-neon-bold-colors-modern-picture-id1225203324?k=20&m=1225203324&s=170667a&w=0&h=ET8aM9QFrI5Nmku1tZHArXSikjFJRKO5tGJYNqBtcWA=',
  // 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%22Evolution%22_and_life_in_vaporwave_flavours._%2848475685782%29.png/1200px-%22Evolution%22_and_life_in_vaporwave_flavours._%2848475685782%29.png',
  // 'https://cdn.magix-iap.com/resize/600x600/PF9Vj3pKT3uauEPFU1Nf_w',
  // 'https://lp-cms-production.imgix.net/features/2010/03/yoshino_nara_blossoms_japan-274689236f12.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200&h=800',
  // 'https://cdn.zekkei-japan.jp/images/spots/be48ebbc4f7ae93c916420ffbab8610b.jpg',
  // 'https://i.redd.it/dkgi6cd6xuty.jpg'
];

export const useProfileData = () => {
  const [images, setImages] = useState(initialImages);

  return {
    images,

    setImages
  };
};
