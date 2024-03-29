import React from 'react';
import styled from 'styled-components';

const Welcome = styled.div`
  /* Your welcome banner styles */
`;

const Buttons = styled.div`
  /* Your buttons container styles */
`;

const Image = styled.img`
  width: 100%; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Ensure the image is displayed as a block element */
`;

export function WelcomeBanner() {
  return (
    <Welcome>
      <div className="image-container">
        <Image src="/1500x500.jpeg" alt="logo" />
      </div>
      <div className="button-container">
        <Buttons>
          <button className="creative-button" onClick={() => window.open('https://t.me/capybaramansol', '_blank')}>
            🚀 Telegram
          </button>
          <button className="creative-button" onClick={() => window.open('https://x.com/capy_solana', '_blank')}>
            🚀 Twitter
          </button>
        </Buttons>

      </div>
    </Welcome>
  );
}
