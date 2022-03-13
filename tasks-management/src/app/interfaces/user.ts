const TODAY = Date.now();

export class UserEntity {
    id = '';
    isDeveloper = false;
    devices = 0;
    sessions: Array<any> = [];
    location = 'Unknown';
    created = TODAY;
    channels = {
      push: true,
      email: false,
      webhook: true,
      appInbox: true
    };
    events = 0;
    bucket = 0;
    attributes: Record<string, any> = {};
}