const covid19ImpactEstimator = (data) => {
  const input = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  };

  const impact = {};
  impact.currentlyInfected = input.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;
  impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  impact.hospitalBedsByRequestedTime = 0.35 * input.totalHospitalBeds;
  impact.casesForICUByRequestedTime = 0.05 * impact.infectionsByRequestedTime;
  impact.casesForVentilatorsByRequestedTime =
    0.02 * impact.infectionsByRequestedTime;
  impact.dollarsInFlight = (impact.infectionsByRequestedTime * 0.65 * 1.5) / 30;

  const severeImpact = {};
  severeImpact.currentlyInfected = input.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;
  severeImpact.severeCasesByRequestedTime =
    0.15 * severeImpact.infectionsByRequestedTime;
  severeImpact.hospitalBedsByRequestedTime = 0.35 * input.totalHospitalBeds;
  severeImpact.casesForICUByRequestedTime =
    0.05 * severeImpact.infectionsByRequestedTime;
  severeImpact.casesForVentilatorsByRequestedTime =
    0.02 * severeImpact.infectionsByRequestedTime;
  severeImpact.dollarsInFlight =
    (severeImpact.infectionsByRequestedTime * 0.65 * 1.5) / 30;

  return { data: input, impact, severeImpact };
};

export default covid19ImpactEstimator;
