import { MutationTree } from 'vuex';
import { MessageState } from './state';
import { Message } from '../../components/models';

const mutation: MutationTree<MessageState> = {
  SET_MESSAGES(state: MessageState, messages: Array<Message>) {
    state.messages = messages;
  },
};

export default mutation;
