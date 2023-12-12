docker build --no-cache -f SQL\Dockerfile.PostgreSql -t avtomatizaciya_zakupki-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t avtomatizaciya_zakupki-java/app ../../..
