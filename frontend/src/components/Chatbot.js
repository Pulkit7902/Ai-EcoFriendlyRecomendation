const Chatbot = () => {

window.watsonAssistantChatOptions = {
  integrationID: "a83fd73c-e400-46c8-8853-2bd02117e557", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "ebc3f553-5104-4d8c-a446-89a00e99e359", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
}
export default Chatbot
  