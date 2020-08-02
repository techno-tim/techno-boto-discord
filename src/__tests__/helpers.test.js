import { containsUrl, isTwitchUrl } from '../helpers';

describe('helpers', () => {

  describe('containsUrl', () => {
    it('verifies an http url', () => {
      expect(containsUrl('http://twitch.tv/technotim')).toEqual(true);
    });
    it('verifies an https url', () => {
      expect(containsUrl('https://twitch.tv/technotim')).toEqual(true);
    });
    it('verifies a www url', () => {
      expect(containsUrl('www.twitch.tv/technotim')).toEqual(true);
    });
    it('verifies a non url', () => {
      expect(containsUrl('not a url')).toEqual(false);
    });
  });

  describe('isTwitchUrl', () => {
    it('verifies a twitch ul', () => {
      expect(isTwitchUrl('http://twitch.tv/technotim')).toEqual(true);
    });
    it('verifies a youtube url', () => {
      expect(isTwitchUrl('https://www.youtube.com/c/TechnoTimLive')).toEqual(false);
    });
  });
});