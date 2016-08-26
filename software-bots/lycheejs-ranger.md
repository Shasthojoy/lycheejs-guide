
# lychee.js Ranger

The `lycheejs-ranger` is graphical Tool that helps
you manage any lychee.js Harvester installation.

It can modify and set profiles, reboot every project-
and library-specific server and the Harvester itself.


## Usage

The lychee.js Ranger can be started via the Desktop
Applications entry or the `lycheejs-ranger` command.

If you want to connect to a foreign server that is
not your local machine, you can tunnel the connection
through SSH:

```bash
ssh -L 4848:localhost:4848 user@public-server.tld
```

For security reasons, the Harvester only listens on
`localhost` on the management port `4848`, so that
no public access is possible.

