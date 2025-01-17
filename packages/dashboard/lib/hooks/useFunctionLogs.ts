import { Timeframe } from 'lib/types';
import { LOG_LEVELS } from '@lagon/ui';
import { trpc } from 'lib/trpc';

type LogLevel = typeof LOG_LEVELS[number];

const useFunctionLogs = ({
  functionId,
  logLevel,
  timeframe,
}: {
  functionId?: string;
  logLevel: LogLevel;
  timeframe: Timeframe;
}) => {
  return trpc.functionLogs.useQuery(
    { functionId: functionId || '', logLevel, timeframe },
    {
      refetchInterval: 5000,
      enabled: !!functionId,
    },
  );
};

export default useFunctionLogs;
