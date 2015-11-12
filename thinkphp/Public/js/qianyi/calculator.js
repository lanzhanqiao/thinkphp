function Calculator(mode){
    if(mode=='jy'){
        this.mode = 'jy';
    } else {
        this.mode = 'normal';
    }
}
Calculator.prototype.NORMAL = 'normal';
Calculator.prototype.JY = 'jy';
Calculator.prototype.calculate = function(principal, period, rate){
    if(!/\d+/.test(principal)){
        throw "principal value error!";
    }
    if((!/\d+/.test(period))||(period*10)%10!=0||period<1||period>36){
        throw "period value error!"
    }
    if(rate>0.2||rate<0.1){
        throw "interest rate value error!"
    }
    var mr = rate/12
        , mp = this._monthPay(principal, period, mr)
        , total = mp * period
        , interest = total - principal;
    var plan = {
        principal : principal,
        period :period,
        rate : rate,
        mrate: mr,
        total: total,
        interest :round(interest),
        mode : this.mode,
        month_pay : round(mp)
    }
    plan = this._genfare(plan);
    return this._genPlan(plan);
}
Calculator.prototype._monthPay = function(principal, period, mr){
    var v1 = Math.pow(mr+1, period), v2 = principal * v1 * mr, v3 = v1- 1, result = v2/v3;
    return result;
}
Calculator.prototype._genfare = function(plan){
    if(plan.mode == this.NORMAL){
        plan.fare = ((plan.period)>2?(plan.principal)*(0.04+((plan.period)-2)*0.002):(plan.principal)*0.04);
        plan.mfare = 0;
        plan.loan = plan.principal - plan.fare;
        plan.balance = round(plan.total)
    } else if(plan.mode == this.JY){
        var rate_dic = {12:0.0033, 18:0.00307, 24:0.00284, 36:0.00235},
            rate = rate_dic[plan.period];
        plan.mfare = round(rate * plan.principal);
        plan.fare = plan.mfare * plan.period;
        plan.loan = plan.principal
        plan.balance = round((plan.total + plan.fare ));
    }
    plan.total = round((plan.total + plan.fare ));
    plan.fare = round(plan.fare);
    return plan;
}
Calculator.prototype._genPlan = function(plan){
    var pay_unit = new Array(), p_balance = plan.principal, i_balance = plan.interest;

    for(var i=1;i<=plan.period;i++){
        var unit = {};
        unit.index = i;
        unit.fare = plan.mfare;
        if(i == plan.period){
            unit.total = round((plan.balance - (plan.month_pay + plan.mfare)*(plan.period-1)));
            unit.interest = round(i_balance);
            unit.principal = round(p_balance);
            unit.balance = 0;
        } else {
            unit.total = round((plan.month_pay + unit.fare));
            unit.interest = round(p_balance * plan.mrate);
            unit.principal = round((plan.month_pay - unit.interest));
            unit.balance = round((plan.balance - (unit.fare + plan.month_pay) * i));
            p_balance -= unit.principal;
            i_balance -= unit.interest;
        }
        pay_unit.push(unit);
    }
    plan.pay_unit = pay_unit;
    plan.month_pay = pay_unit[0].total;
    return plan;
}
function round(x){
    return Math.round(x*100)/100;
}