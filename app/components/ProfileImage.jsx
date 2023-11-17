const ProfileImage = ({ src, layouClass }) => {
  return (
    <>
      <img src={src} alt={src} className={layouClass} />
    </>
  );
};

export default ProfileImage;
