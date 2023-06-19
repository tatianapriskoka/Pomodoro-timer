const WORK_TIME = 0.1;
const BREAK_TIME = 0.2;
const RELAX_TIME = 0.5;

export const state = {
    work: WORK_TIME,
    break: BREAK_TIME,
    relax: RELAX_TIME,
    status: 'work',
    count: 4,
    timeLeft: WORK_TIME * 60,
    isActive: false,
    timerId: 0,
};