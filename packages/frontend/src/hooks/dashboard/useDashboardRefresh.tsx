import { useCallback, useMemo } from 'react';
import { Query, useIsFetching, useQueryClient } from 'react-query';

const QUERIES_TO_REFRESH = [
    'savedChartResults',
    'saved_query',
    'saved_dashboard_query',
    'dashboards',
];

const queryPredicate = (query: Query) => {
    return QUERIES_TO_REFRESH.some((key) => {
        const firstQueryKey =
            typeof query.queryKey === 'string'
                ? query.queryKey
                : query.queryKey[0];
        return firstQueryKey === key;
    });
};

export const useDashboardRefresh = () => {
    console.log('useDashboardRefresh');

    const queryClient = useQueryClient();

    const isFetching = useIsFetching({ predicate: queryPredicate });

    const invalidateDashboardRelatedQueries = useCallback(() => {
        return queryClient.invalidateQueries({
            predicate: queryPredicate,
        });
    }, [queryClient]);

    return useMemo(
        () => ({
            invalidateDashboardRelatedQueries,
            isFetching,
        }),
        [invalidateDashboardRelatedQueries, isFetching],
    );
};
