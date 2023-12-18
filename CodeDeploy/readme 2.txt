aws deploy create-deployment-config \
--deployment-config-name 3HostsHealthy \
--minimum-healthy-hosts type=HOST_COUNT,value=3 \
--compute-platform Server

aws deploy create-deployment-config \
--deployment-config-name 75PercentHealthy \
--minimum-healthy-hosts type=FLEET_PERCENT,value=75 \
--compute-platform Server