import _ from 'lodash'

export const getAmountSum = (transaction, type) => {
    return _(transaction)
        .groupBy("type")
        .map((objs, key) => {
            if (!type) return _.sumBy(objs, 'amount')
            return {
                'type': key,
                'color': objs[0].color,
                'total': _.sumBy(objs, 'amount')
            }
        })
        .value();
}

export const getLabels = (transaction) => {
    let amountSum = getAmountSum(transaction, 'type')
    let total = _.sum(getAmountSum(transaction))
    return _(amountSum)
        .map(objs => _.assign(objs, {percent: (100 * objs.total) / total}))
        .value()
}

export const getChartData = (transaction, custom) => {
    let bgColors = _.map(transaction, a => a.color)
    bgColors = _.uniq(bgColors)
    let dataValue = getAmountSum(transaction)

    const config = {
        data: {
            datasets: [{
                data: dataValue,
                backgroundColor: bgColors,
                hoverOffset: 4,
                borderRadius: 8,
                spacing: 5
            }]
        },
        options: {
            cutout: 115
        }
    };

    return custom ?? config;
}

export const getTotalAmount = (transaction) => {
    return _.sum(getAmountSum(transaction))
}