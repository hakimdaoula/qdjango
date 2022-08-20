import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { MessageState } from './state';

const getters: GetterTree<MessageState, StateInterface> = {
  getMessages (state: MessageState) {
    return state.messages;
  }
};

export default getters;
