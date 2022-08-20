import { Message } from '../../components/models';

export interface MessageState {
  messages: Array<Message>;
}

function state(): MessageState {
  return {
    messages: [],
  };
}

export default state;
