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

export type Shout = {
  id: string;
  text: string;
  userId: string;
  timestamp: Timestamp;
  reactionSummary?: {
    [key in ReactionEnum]?: number;
  };
  reactions?: {
    id: string;
    timestamp: Timestamp;
    type: ReactionEnum;
  }[];
};
