// receives customer info

const header = ({ name, location, avatarImgId }) => {
  const header = document.getElementById("header");
  const avatar = (photoId) => {
    const src = `https://picsum.photos/id/${photoId}/50`;
    return `
            <img src='${src}' alt='example image' class="avatar"/>
            <div class="name">
              <h2>${name}</h2>
              <p>${location}</p>
            <div/>
          `;
  };

  header.innerHTML += avatar(avatarImgId);
};

export default header;
