// ShareButtons.js
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

// Function to copy the share URL and title to clipboard
const copyToClipboard = (url, title) => {
  const textToCopy = `${title} - ${url}`;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('Link copied to clipboard!');
  }, (err) => {
    console.error('Failed to copy: ', err);
  });
};

const ShareButtons = ({ url, title }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      {/* Facebook Share Button */}
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={25} round />
      </FacebookShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={25} round />
      </TwitterShareButton>

      {/* WhatsApp Share Button */}
      <WhatsappShareButton url={url} title={title} separator="">
        <WhatsappIcon size={25} round />
      </WhatsappShareButton>

      

      {/* Copy to Clipboard Button */}
      <button
        className='border-2 border-gray-300 px-1 py-0 rounded-md text-sm text-black hover:bg-gray-200 hover:'
        onClick={() => copyToClipboard(url, title)}
        style={{
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize:'10px',
        }}
      >
        Copy Link
      </button>
    </div>
  );
};

export default ShareButtons;
