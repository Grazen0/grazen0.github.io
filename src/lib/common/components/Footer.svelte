<script lang="ts">
  import { links } from '$lib/common/constants';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa';
</script>

<footer class="py-6 text-center">
  <small>
    &copy; 2025 José Daniel Grayson -
    <a href={links.repo} class="inline-flex items-center gap-x-2 hover:underline">
      <Fa icon={faGithub} />
      source
    </a>
  </small>
</footer>
