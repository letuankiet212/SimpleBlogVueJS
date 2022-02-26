export const previewImgUpload = (e) => {
  const files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  return URL.createObjectURL(files[0]);
};
