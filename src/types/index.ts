export interface App {
  id: string;
  name: string;
  concept: string;
  architectureImage: string;
  demoGifImage: string;
  designIntent: string;
  demoVideoUrl?: string;
  interactiveDemoUrl?: string;
}

export interface BusinessAsset {
  title: string;
  imageUrl: string;
  description?: string;
}

export interface AppData {
  apps: App[];
  businessModel: BusinessAsset;
  targetAudience: BusinessAsset;
  promotionalVideoUrl: string;
  invitationMessage: string;
  xAccountUrl: string;
}