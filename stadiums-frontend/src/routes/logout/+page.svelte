<script lang="ts">
	import { goto } from "$app/navigation";
	import { accountService } from "../../services/account-service";

	accountService.logout();
	goto("/");
</script>