import React from 'react';
export default { title: 'ChatBalloon' };

import ChatBalloon from './ChatBalloon';

export const SenderChatBallon = () => (
  <ChatBalloon type="sender" content={'It is me, Mario !!!'} time="08:35 am" />
);

export const SuperTextSenderChatBallon = () => (
  <ChatBalloon
    type="sender"
    content={`ahsdfljkahsd jfkahsfk lhasdfkjasl hdfjasldfjka hsldfjas dhkflas jdkfhalsjdkfha klsdjfa sjldfhalsdk jfjakls dhfjkalshdf kjafh lasjdfhk alskhdfj alsf 
      ahsdfljkahsd jfkahsfk lhasdfkjasl hdfjasldfjka hsldfjas dhkflas jdkfhalsjdkfha klsdjfa sjldfhalsdk jfjakls dhfjkalshdf kjafh lasjdfhk alskhdfj alsf 
      ahsdfljkahsd jfkahsfk lhasdfkjasl hdfjasldfjka hsldfjas dhkflas jdkfhalsjdkfha klsdjfa sjldfhalsdk jfjakls dhfjkalshdf kjafh lasjdfhk alskhdfj alsf 
      ahsdfljkahsd jfkahsfk lhasdfkjasl hdfjasldfjka hsldfjas dhkflas jdkfhalsjdkfha klsdjfa sjldfhalsdk jfjakls dhfjkalshdf kjafh lasjdfhk alskhdfj alsf 
      ahsdfljkahsd jfkahsfk lhasdfkjasl hdfjasldfjka hsldfjas dhkflas jdkfhalsjdkfha klsdjfa sjldfhalsdk jfjakls dhfjkalshdf kjafh lasjdfhk alskhdfj alsf 
      ahsdfljkahsd jfkahsfk lhasdfkjasl hdfjasldfjka hsldfjas dhkflas jdkfhalsjdkfha klsdjfa sjldfhalsdk jfjakls dhfjkalshdf kjafh lasjdfhk alskhdfj alsf 
      ahsdfljkahsd jfkahsfk lhasdfkjasl hdfjasldfjka hsldfjas dhkflas jdkfhalsjdkfha klsdjfa sjldfhalsdk jfjakls dhfjkalshdf kjafh lasjdfhk alskhdfj alsf 
      ahsdfljkahsd  lhasdfkjasl hdfjasldfjka hsldfjas dhkflas jdkfhalsjdkfha klsdjfa sjldfhalsdk jfjakls dhfjkalshdf kjafh lasjdfhk alskhdfj alsf 
      `}
    time="08:35 am"
  />
);
