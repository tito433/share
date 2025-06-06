export enum ReactionEnum {
  Like = "like",
  Haha = "haha",
  Love = "love",
  Wow = "wow",
  Sad = "sad",
  Poop = "poop",
  Angry = "angry",
}

export type Timestamp = {
  nanoseconds: number;
  seconds: number;
};

export type Reaction = {
  type: ReactionEnum;
  timestamp: Timestamp;
};

export type Shout = {
  id: string;
  text: string;
  userId: string;
  timestamp: Timestamp;
  reactionSummary?: {
    [key in ReactionEnum]?: number;
  };
  files?: string[];
};

export interface UploadItem {
  progress: number;
  url: string | null;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  parentCommentId: string | null;
  timestamp: any;
  replies?: Comment[];
}
