import { registerSelector } from '@ackee/redux-worker/worker';
import { BRIDGE_ID } from '../constants';
import { translateSelector } from '../services/selectors';
registerSelector(BRIDGE_ID, function (state) {
  return translateSelector(state);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IT0MvdHJhbnNsYXRhYmxlRmFjdG9yeS5zZWxlY3Rvci50cyJdLCJuYW1lcyI6WyJyZWdpc3RlclNlbGVjdG9yIiwiQlJJREdFX0lEIiwidHJhbnNsYXRlU2VsZWN0b3IiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZ0JBQVQsUUFBaUMsNEJBQWpDO0FBRUEsU0FBU0MsU0FBVCxRQUEwQixjQUExQjtBQUVBLFNBQVNDLGlCQUFULFFBQWtDLHVCQUFsQztBQUVBRixnQkFBZ0IsQ0FBQ0MsU0FBRCxFQUFZLFVBQUNFLEtBQUQ7QUFBQSxTQUFrQkQsaUJBQWlCLENBQUNDLEtBQUQsQ0FBbkM7QUFBQSxDQUFaLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJTZWxlY3RvciB9IGZyb20gJ0BhY2tlZS9yZWR1eC13b3JrZXIvd29ya2VyJztcblxuaW1wb3J0IHsgQlJJREdFX0lEIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdHJhbnNsYXRlU2VsZWN0b3IgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWxlY3RvcnMnO1xuXG5yZWdpc3RlclNlbGVjdG9yKEJSSURHRV9JRCwgKHN0YXRlOiBTdGF0ZSkgPT4gdHJhbnNsYXRlU2VsZWN0b3Ioc3RhdGUpKTtcbiJdfQ==