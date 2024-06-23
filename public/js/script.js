document.addEventListener("DOMContentLoaded", function() {
    const siteId = '1634115';
    const apiKey = 'HLSQJVEUPT2CQ07D2ENLCV0GD6D434PL';
<<<<<<< HEAD
    selectSite(siteId, apiKey);

    // Controlla lo stato di login all'avvio
    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    updateLoginLogoutButton(loggedIn);

    // Aggiorna il grafico ogni 15 minuti
    setInterval(() => {
        selectSite(siteId, apiKey);
    }, 900000); // 900000 ms = 15 minuti

    document.getElementById('menuButton').addEventListener('click', toggleMenu);
    document.getElementById('loginButton').addEventListener('click', handleLoginLogout);
    document.getElementById('toggleDataButton').addEventListener('click', toggleData);
    document.getElementById('toggleSizeButton').addEventListener('click', toggleChartSize);
=======
    const page = document.body.getAttribute('data-page');

    selectSite(siteId, apiKey);

    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    updateLoginLogoutButton(loggedIn);

    setInterval(() => {
        selectSite(siteId, apiKey);
    }, 60000); // Aggiorna ogni minuto
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
});

let chartKWh;
let chartCHF;
let showingYesterday = false;

<<<<<<< HEAD
=======
function updateLoginLogoutButton(loggedIn) {
    const button = document.querySelector('.login-button');
    button.textContent = loggedIn ? 'Logout' : 'Login';
}

>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
function toggleMenu() {
    const nav = document.querySelector("nav");
    const homeSection = document.getElementById("home");
    const logoSection = document.querySelector(".logo-section");
    const logoMain = document.querySelector(".logo-main");
    const logoSmall = document.querySelector(".logo-small");

    nav.classList.toggle("show-menu");
    homeSection.classList.toggle("show-menu");
    logoSection.classList.toggle("show-menu");
    logoMain.classList.toggle("show-menu");
    logoSmall.classList.toggle("show-menu");
}

function toggleData() {
    showingYesterday = !showingYesterday;
<<<<<<< HEAD
    const button = document.getElementById('toggleDataButton');
    button.textContent = showingYesterday ? 'Visualizza Dati Attuali' : 'Visualizza Dati Precedenti';
=======
    const button = document.getElementById('toggle-data-btn');
    button.textContent = showingYesterday ? 'Visualizza Dati di Oggi' : 'Visualizza Dati di Ieri';
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
    selectSite('1634115', 'HLSQJVEUPT2CQ07D2ENLCV0GD6D434PL');
}

function selectSite(siteId, apiKey) {
    if (showingYesterday) {
        getYesterdayProduction(siteId, apiKey);
    } else {
        getCurrentProduction(siteId, apiKey);
    }
<<<<<<< HEAD
    updateChart(showingYesterday ? 'yesterday' : 'today', siteId, apiKey);
=======
    getEnergyData(siteId, apiKey);
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
}

function formatNumber(num) {
    if (num == null) {
        return '0 Wh';
    }
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + ' GWh';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + ' MWh';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + ' kWh';
    } else {
        return num.toFixed(2) + ' Wh';
    }
}

function formatCHF(num) {
    const kWh = num / 1000;
    return kWh * 0.20;
}

function formatCurrencyCHF(num) {
    return `CHF ${num.toLocaleString('it-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getCurrentProduction(siteId, apiKey) {
    fetch(`/api/site/${siteId}/overview?api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dati grezzi ricevuti dal server (overview):", data);
<<<<<<< HEAD
            if (data.overview) {
                const dailyEnergy = data.overview.lastDayData.energy;
                const historicalProduction = data.overview.lifeTimeData.energy;
                const monthlyProduction = data.overview.lastMonthData.energy;
                const currentPower = data.overview.currentPower.power;
                const installedPower = data.overview.lifeTimeData.energy;

                document.getElementById('daily-energy').textContent = `Produzione totale di oggi: ${formatNumber(dailyEnergy)}`;
                document.getElementById('daily-energy-chf').textContent = formatCurrencyCHF(formatCHF(dailyEnergy));

                document.getElementById('historical-production').textContent = `Produzione storica: ${formatNumber(historicalProduction)}`;
                document.getElementById('historical-production-chf').textContent = formatCurrencyCHF(formatCHF(historicalProduction));

                document.getElementById('monthly-production').textContent = `Produzione mensile: ${formatNumber(monthlyProduction)}`;
                document.getElementById('monthly-production-chf').textContent = formatCurrencyCHF(formatCHF(monthlyProduction));

                document.getElementById('current-power').textContent = `Potenza attuale: ${formatNumber(currentPower)}`;
                document.getElementById('current-power-chf').textContent = formatCurrencyCHF(formatCHF(currentPower));

                document.getElementById('installed-power').textContent = `Potenza installata: ${formatNumber(installedPower)}`;
            } else {
                console.error("Dati di overview non trovati:", data);
            }
=======
            const dailyEnergy = data.overview.lastDayData.energy;
            const historicalProduction = data.overview.lifeTimeData.energy;
            const monthlyProduction = data.overview.lastMonthData.energy;
            const currentPower = data.overview.currentPower.power;
            const installedPower = data.overview.lifeTimeData.energy;

            document.getElementById('daily-energy').textContent = `Produzione totale di oggi: ${formatNumber(dailyEnergy)}`;
            document.getElementById('daily-energy-chf').textContent = formatCurrencyCHF(formatCHF(dailyEnergy));
            document.getElementById('historical-production').textContent = `Produzione storica: ${formatNumber(historicalProduction)}`;
            document.getElementById('historical-production-chf').textContent = formatCurrencyCHF(formatCHF(historicalProduction));
            document.getElementById('monthly-production').textContent = `Produzione mensile: ${formatNumber(monthlyProduction)}`;
            document.getElementById('monthly-production-chf').textContent = formatCurrencyCHF(formatCHF(monthlyProduction));
            document.getElementById('current-power').textContent = `Potenza attuale: ${formatNumber(currentPower)}`;
            document.getElementById('current-power-chf').textContent = formatCurrencyCHF(formatCHF(currentPower));
            document.getElementById('installed-power').textContent = `Potenza installata: ${formatNumber(installedPower)}`;
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
        })
        .catch(error => {
            console.error("Errore nel recupero dei dati:", error);
        });
}

function getYesterdayProduction(siteId, apiKey) {
<<<<<<< HEAD
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const endDate = yesterday.toISOString().split('T')[0];
    let startDate = new Date(yesterday);
    startDate.setDate(startDate.getDate() - 1);
    startDate = startDate.toISOString().split('T')[0];

    fetch(`/api/site/${siteId}/energy?startDate=${startDate}&endDate=${endDate}&timeUnit=DAY&api_key=${apiKey}`)
=======
    const yesterday = luxon.DateTime.now().minus({ days: 1 }).toFormat('yyyy-MM-dd');

    const url = `/api/site/${siteId}/energy?startDate=${yesterday}&endDate=${yesterday}&timeUnit=HOUR&api_key=${apiKey}`;
    console.log(`Fetching yesterday's energy data from URL: ${url}`);

    fetch(url)
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dati di produzione di ieri ricevuti dal server:", data);
<<<<<<< HEAD

            if (data.energy && data.energy.values) {
                const yesterdayEnergy = data.energy.values[1].value;

                document.getElementById('energy-yesterday').textContent = `Produzione totale di ieri: ${formatNumber(yesterdayEnergy)}`;
                document.getElementById('energy-yesterday-chf').textContent = formatCurrencyCHF(formatCHF(yesterdayEnergy));
            } else {
                console.error("Dati di energy non trovati:", data);
            }
=======
            updateCharts(data.energy.values, 'yesterday');
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
        })
        .catch(error => {
            console.error("Errore nel recupero dei dati delle ultime 24 ore:", error);
        });
}

<<<<<<< HEAD
function updateChart(day, siteId, apiKey) {
    let endDate, startDate;
    if (day === 'today') {
        endDate = new Date().toISOString().split('T')[0];
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        startDate = startDate.toISOString().split('T')[0];
    } else {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        endDate = yesterday.toISOString().split('T')[0];
        startDate = new Date(yesterday);
        startDate.setDate(startDate.getDate() - 1);
        startDate = startDate.toISOString().split('T')[0];
    }

    fetch(`/api/site/${siteId}/energy?startDate=${startDate}&endDate=${endDate}&timeUnit=HOUR&api_key=${apiKey}`)
=======
function getEnergyData(siteId, apiKey) {
    const today = luxon.DateTime.now().toFormat('yyyy-MM-dd');

    const url = `/api/site/${siteId}/energy?startDate=${today}&endDate=${today}&timeUnit=HOUR&api_key=${apiKey}`;
    console.log(`Fetching today's energy data from URL: ${url}`);

    fetch(url)
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
<<<<<<< HEAD
            console.log("Dati grezzi ricevuti dal server (energy):", data);

            if (data.energy && data.energy.values) {
                const labels = data.energy.values.map(entry => new Date(entry.date));
                const values = data.energy.values.map(entry => entry.value / 1000); // Converti in kWh
                const valuesCHF = values.map(value => formatCHF(value * 1000)); // CHF

                document.getElementById('chart-date').textContent = `${labels[0].toLocaleDateString()} - ${labels[labels.length - 1].toLocaleDateString()}`;

                if (chartKWh) {
                    chartKWh.destroy();
                }
                chartKWh = new Chart(document.getElementById('kWhChart').getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: `Produzione ${day === 'today' ? 'di oggi' : 'di ieri'} (kWh)`,
                            data: values,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderWidth: 1,
                            pointRadius: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                type: 'time',
                                time: {
                                    unit: 'hour',
                                    tooltipFormat: 'HH:mm',
                                    displayFormats: {
                                        hour: 'HH:mm',
                                        day: 'MMM D'
                                    }
                                },
                                ticks: {
                                    color: 'white'
                                }
                            },
                            y: {
                                beginAtZero: false,
                                ticks: {
                                    color: 'white'
                                },
                                title: {
                                    display: true,
                                    text: 'Produzione (kWh)',
                                    color: 'white'
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.y !== null) {
                                            label += parseFloat(context.parsed.y).toFixed(2) + ' kWh';
                                        }
                                        return label;
                                    }
                                }
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                });

                if (chartCHF) {
                    chartCHF.destroy();
                }
                chartCHF = new Chart(document.getElementById('chfChart').getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: `Produzione ${day === 'today' ? 'di oggi' : 'di ieri'} (CHF)`,
                            data: valuesCHF,
                            borderColor: 'rgba(255, 206, 86, 1)',
                            backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            borderWidth: 1,
                            pointRadius: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                type: 'time',
                                time: {
                                    unit: 'hour',
                                    tooltipFormat: 'HH:mm',
                                    displayFormats: {
                                        hour: 'HH:mm',
                                        day: 'MMM D'
                                    }
                                },
                                ticks: {
                                    color: 'white'
                                }
                            },
                            y: {
                                beginAtZero: false,
                                ticks: {
                                    color: 'white'
                                },
                                title: {
                                    display: true,
                                    text: 'Produzione (CHF)',
                                    color: 'white'
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.y !== null) {
                                            label += parseFloat(context.parsed.y).toFixed(2) + ' CHF';
                                        }
                                        return label;
                                    }
                                }
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                });
            } else {
                console.error("Dati di energy non trovati:", data);
            }
        })
        .catch(error => {
            console.error("Errore nel recupero dei dati delle ultime 24 ore:", error);
        });
}

function toggleChartSize() {
    const chartContainer = document.getElementById('chart-container');
    chartContainer.classList.toggle('chart-large');
    const button = document.querySelector('.toggle-size-button');
    button.textContent = chartContainer.classList.contains('chart-large') ? 'Chiudi' : 'Apri';
}

function handleLoginLogout() {
    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
        sessionStorage.setItem('loggedIn', 'false');
        window.location.href = 'login.html';
    } else {
        window.location.href = 'login.html';
    }
}

function updateLoginLogoutButton(loggedIn) {
    const button = document.querySelector('.login-button');
    button.textContent = loggedIn ? 'Logout' : 'Login';
=======
            console.log(`Dati di produzione di oggi ricevuti dal server:`, data);
            updateCharts(data.energy.values, 'today');
        })
        .catch(error => {
            console.error(`Errore nel recupero dei dati di today:`, error);
        });
}

function updateCharts(energyValues, type) {
    const labels = energyValues.map(item => luxon.DateTime.fromISO(item.date).toFormat('HH:mm'));
    const values = energyValues.map(item => item.value);
    const chfValues = values.map(value => formatCHF(value));

    const peakPower = Math.max(...values);

    if (chartKWh) {
        chartKWh.destroy();
    }
    if (chartCHF) {
        chartCHF.destroy();
    }

    const ctxKWh = document.getElementById('kWhChart').getContext('2d');
    chartKWh = new Chart(ctxKWh, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Produzione Energetica (kWh)',
                    data: values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'hour',
                        tooltipFormat: 'HH:mm',
                        displayFormats: {
                            hour: 'HH:mm'
                        }
                    },
                    ticks: {
                        color: 'black',
                        autoSkip: false,
                        maxRotation: 90,
                        minRotation: 0
                    }
                },
                y: {
                    beginAtZero: true,
                    max: peakPower,
                    ticks: {
                        color: 'black'
                    },
                    title: {
                        display: true,
                        text: 'Produzione (kWh)',
                        color: 'black'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += `${parseFloat(context.parsed.y).toFixed(2)} kWh`;
                            }
                            return label;
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });

    const ctxCHF = document.getElementById('chfChart').getContext('2d');
    chartCHF = new Chart(ctxCHF, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Produzione in CHF',
                    data: chfValues,
                    borderColor: 'rgba(255, 206, 86, 1)',
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'hour',
                        tooltipFormat: 'HH:mm',
                        displayFormats: {
                            hour: 'HH:mm'
                        }
                    },
                    ticks: {
                        color: 'black',
                        autoSkip: false,
                        maxRotation: 90,
                        minRotation: 0
                    }
                },
                y: {
                    beginAtZero: true,
                    max: formatCHF(peakPower),
                    ticks: {
                        color: 'black'
                    },
                    title: {
                        display: true,
                        text: 'Produzione (CHF)',
                        color: 'black'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += `CHF ${parseFloat(context.parsed.y).toFixed(2)}`;
                            }
                            return label;
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
}




<<<<<<< HEAD
=======









































>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
