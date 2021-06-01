import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildProjectConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#badge_enabled CodebuildProject#badge_enabled}.
     */
    readonly badgeEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_timeout CodebuildProject#build_timeout}.
     */
    readonly buildTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#concurrent_build_limit CodebuildProject#concurrent_build_limit}.
     */
    readonly concurrentBuildLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#description CodebuildProject#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_key CodebuildProject#encryption_key}.
     */
    readonly encryptionKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#queued_timeout CodebuildProject#queued_timeout}.
     */
    readonly queuedTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#service_role CodebuildProject#service_role}.
     */
    readonly serviceRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source_version CodebuildProject#source_version}.
     */
    readonly sourceVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#tags CodebuildProject#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#tags_all CodebuildProject#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * artifacts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifacts CodebuildProject#artifacts}
     */
    readonly artifacts: CodebuildProjectArtifacts[];
    /**
     * build_batch_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_batch_config CodebuildProject#build_batch_config}
     */
    readonly buildBatchConfig?: CodebuildProjectBuildBatchConfig[];
    /**
     * cache block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#cache CodebuildProject#cache}
     */
    readonly cache?: CodebuildProjectCache[];
    /**
     * environment block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#environment CodebuildProject#environment}
     */
    readonly environment: CodebuildProjectEnvironment[];
    /**
     * file_system_locations block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#file_system_locations CodebuildProject#file_system_locations}
     */
    readonly fileSystemLocations?: CodebuildProjectFileSystemLocations[];
    /**
     * logs_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#logs_config CodebuildProject#logs_config}
     */
    readonly logsConfig?: CodebuildProjectLogsConfig[];
    /**
     * secondary_artifacts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#secondary_artifacts CodebuildProject#secondary_artifacts}
     */
    readonly secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[];
    /**
     * secondary_sources block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#secondary_sources CodebuildProject#secondary_sources}
     */
    readonly secondarySources?: CodebuildProjectSecondarySources[];
    /**
     * source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source CodebuildProject#source}
     */
    readonly source: CodebuildProjectSource[];
    /**
     * vpc_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#vpc_config CodebuildProject#vpc_config}
     */
    readonly vpcConfig?: CodebuildProjectVpcConfig[];
}
export interface CodebuildProjectArtifacts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifact_identifier CodebuildProject#artifact_identifier}.
     */
    readonly artifactIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}.
     */
    readonly encryptionDisabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#namespace_type CodebuildProject#namespace_type}.
     */
    readonly namespaceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#override_artifact_name CodebuildProject#override_artifact_name}.
     */
    readonly overrideArtifactName?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#packaging CodebuildProject#packaging}.
     */
    readonly packaging?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#path CodebuildProject#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type: string;
}
export interface CodebuildProjectBuildBatchConfigRestrictions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#compute_types_allowed CodebuildProject#compute_types_allowed}.
     */
    readonly computeTypesAllowed?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}.
     */
    readonly maximumBuildsAllowed?: number;
}
export interface CodebuildProjectBuildBatchConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#combine_artifacts CodebuildProject#combine_artifacts}.
     */
    readonly combineArtifacts?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#service_role CodebuildProject#service_role}.
     */
    readonly serviceRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#timeout_in_mins CodebuildProject#timeout_in_mins}.
     */
    readonly timeoutInMins?: number;
    /**
     * restrictions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#restrictions CodebuildProject#restrictions}
     */
    readonly restrictions?: CodebuildProjectBuildBatchConfigRestrictions[];
}
export interface CodebuildProjectCache {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#modes CodebuildProject#modes}.
     */
    readonly modes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type?: string;
}
export interface CodebuildProjectEnvironmentEnvironmentVariable {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#value CodebuildProject#value}.
     */
    readonly value: string;
}
export interface CodebuildProjectEnvironmentRegistryCredential {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#credential CodebuildProject#credential}.
     */
    readonly credential: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#credential_provider CodebuildProject#credential_provider}.
     */
    readonly credentialProvider: string;
}
export interface CodebuildProjectEnvironment {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#certificate CodebuildProject#certificate}.
     */
    readonly certificate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#compute_type CodebuildProject#compute_type}.
     */
    readonly computeType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#image CodebuildProject#image}.
     */
    readonly image: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}.
     */
    readonly imagePullCredentialsType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#privileged_mode CodebuildProject#privileged_mode}.
     */
    readonly privilegedMode?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type: string;
    /**
     * environment_variable block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#environment_variable CodebuildProject#environment_variable}
     */
    readonly environmentVariable?: CodebuildProjectEnvironmentEnvironmentVariable[];
    /**
     * registry_credential block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#registry_credential CodebuildProject#registry_credential}
     */
    readonly registryCredential?: CodebuildProjectEnvironmentRegistryCredential[];
}
export interface CodebuildProjectFileSystemLocations {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#identifier CodebuildProject#identifier}.
     */
    readonly identifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#mount_options CodebuildProject#mount_options}.
     */
    readonly mountOptions?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#mount_point CodebuildProject#mount_point}.
     */
    readonly mountPoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type?: string;
}
export interface CodebuildProjectLogsConfigCloudwatchLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#group_name CodebuildProject#group_name}.
     */
    readonly groupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#status CodebuildProject#status}.
     */
    readonly status?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#stream_name CodebuildProject#stream_name}.
     */
    readonly streamName?: string;
}
export interface CodebuildProjectLogsConfigS3Logs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}.
     */
    readonly encryptionDisabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#status CodebuildProject#status}.
     */
    readonly status?: string;
}
export interface CodebuildProjectLogsConfig {
    /**
     * cloudwatch_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#cloudwatch_logs CodebuildProject#cloudwatch_logs}
     */
    readonly cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs[];
    /**
     * s3_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#s3_logs CodebuildProject#s3_logs}
     */
    readonly s3Logs?: CodebuildProjectLogsConfigS3Logs[];
}
export interface CodebuildProjectSecondaryArtifacts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifact_identifier CodebuildProject#artifact_identifier}.
     */
    readonly artifactIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}.
     */
    readonly encryptionDisabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#namespace_type CodebuildProject#namespace_type}.
     */
    readonly namespaceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#override_artifact_name CodebuildProject#override_artifact_name}.
     */
    readonly overrideArtifactName?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#packaging CodebuildProject#packaging}.
     */
    readonly packaging?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#path CodebuildProject#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type: string;
}
export interface CodebuildProjectSecondarySourcesAuth {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#resource CodebuildProject#resource}.
     */
    readonly resource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type: string;
}
export interface CodebuildProjectSecondarySourcesBuildStatusConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#context CodebuildProject#context}.
     */
    readonly context?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#target_url CodebuildProject#target_url}.
     */
    readonly targetUrl?: string;
}
export interface CodebuildProjectSecondarySourcesGitSubmodulesConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#fetch_submodules CodebuildProject#fetch_submodules}.
     */
    readonly fetchSubmodules: boolean;
}
export interface CodebuildProjectSecondarySources {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#buildspec CodebuildProject#buildspec}.
     */
    readonly buildspec?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_clone_depth CodebuildProject#git_clone_depth}.
     */
    readonly gitCloneDepth?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#insecure_ssl CodebuildProject#insecure_ssl}.
     */
    readonly insecureSsl?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#report_build_status CodebuildProject#report_build_status}.
     */
    readonly reportBuildStatus?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source_identifier CodebuildProject#source_identifier}.
     */
    readonly sourceIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type: string;
    /**
     * auth block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#auth CodebuildProject#auth}
     */
    readonly auth?: CodebuildProjectSecondarySourcesAuth[];
    /**
     * build_status_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_status_config CodebuildProject#build_status_config}
     */
    readonly buildStatusConfig?: CodebuildProjectSecondarySourcesBuildStatusConfig[];
    /**
     * git_submodules_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_submodules_config CodebuildProject#git_submodules_config}
     */
    readonly gitSubmodulesConfig?: CodebuildProjectSecondarySourcesGitSubmodulesConfig[];
}
export interface CodebuildProjectSourceAuth {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#resource CodebuildProject#resource}.
     */
    readonly resource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type: string;
}
export interface CodebuildProjectSourceBuildStatusConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#context CodebuildProject#context}.
     */
    readonly context?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#target_url CodebuildProject#target_url}.
     */
    readonly targetUrl?: string;
}
export interface CodebuildProjectSourceGitSubmodulesConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#fetch_submodules CodebuildProject#fetch_submodules}.
     */
    readonly fetchSubmodules: boolean;
}
export interface CodebuildProjectSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#buildspec CodebuildProject#buildspec}.
     */
    readonly buildspec?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_clone_depth CodebuildProject#git_clone_depth}.
     */
    readonly gitCloneDepth?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#insecure_ssl CodebuildProject#insecure_ssl}.
     */
    readonly insecureSsl?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#report_build_status CodebuildProject#report_build_status}.
     */
    readonly reportBuildStatus?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}.
     */
    readonly type: string;
    /**
     * auth block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#auth CodebuildProject#auth}
     */
    readonly auth?: CodebuildProjectSourceAuth[];
    /**
     * build_status_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_status_config CodebuildProject#build_status_config}
     */
    readonly buildStatusConfig?: CodebuildProjectSourceBuildStatusConfig[];
    /**
     * git_submodules_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_submodules_config CodebuildProject#git_submodules_config}
     */
    readonly gitSubmodulesConfig?: CodebuildProjectSourceGitSubmodulesConfig[];
}
export interface CodebuildProjectVpcConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#security_group_ids CodebuildProject#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#subnets CodebuildProject#subnets}.
     */
    readonly subnets: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#vpc_id CodebuildProject#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project}.
 */
export declare class CodebuildProject extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodebuildProjectConfig);
    get arn(): string;
    private _badgeEnabled?;
    get badgeEnabled(): boolean;
    set badgeEnabled(value: boolean);
    resetBadgeEnabled(): void;
    get badgeEnabledInput(): boolean | undefined;
    get badgeUrl(): string;
    private _buildTimeout?;
    get buildTimeout(): number;
    set buildTimeout(value: number);
    resetBuildTimeout(): void;
    get buildTimeoutInput(): number | undefined;
    private _concurrentBuildLimit?;
    get concurrentBuildLimit(): number;
    set concurrentBuildLimit(value: number);
    resetConcurrentBuildLimit(): void;
    get concurrentBuildLimitInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _encryptionKey?;
    get encryptionKey(): string;
    set encryptionKey(value: string);
    resetEncryptionKey(): void;
    get encryptionKeyInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _queuedTimeout?;
    get queuedTimeout(): number;
    set queuedTimeout(value: number);
    resetQueuedTimeout(): void;
    get queuedTimeoutInput(): number | undefined;
    private _serviceRole;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string;
    private _sourceVersion?;
    get sourceVersion(): string;
    set sourceVersion(value: string);
    resetSourceVersion(): void;
    get sourceVersionInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _artifacts;
    get artifacts(): CodebuildProjectArtifacts[];
    set artifacts(value: CodebuildProjectArtifacts[]);
    get artifactsInput(): CodebuildProjectArtifacts[];
    private _buildBatchConfig?;
    get buildBatchConfig(): CodebuildProjectBuildBatchConfig[];
    set buildBatchConfig(value: CodebuildProjectBuildBatchConfig[]);
    resetBuildBatchConfig(): void;
    get buildBatchConfigInput(): CodebuildProjectBuildBatchConfig[] | undefined;
    private _cache?;
    get cache(): CodebuildProjectCache[];
    set cache(value: CodebuildProjectCache[]);
    resetCache(): void;
    get cacheInput(): CodebuildProjectCache[] | undefined;
    private _environment;
    get environment(): CodebuildProjectEnvironment[];
    set environment(value: CodebuildProjectEnvironment[]);
    get environmentInput(): CodebuildProjectEnvironment[];
    private _fileSystemLocations?;
    get fileSystemLocations(): CodebuildProjectFileSystemLocations[];
    set fileSystemLocations(value: CodebuildProjectFileSystemLocations[]);
    resetFileSystemLocations(): void;
    get fileSystemLocationsInput(): CodebuildProjectFileSystemLocations[] | undefined;
    private _logsConfig?;
    get logsConfig(): CodebuildProjectLogsConfig[];
    set logsConfig(value: CodebuildProjectLogsConfig[]);
    resetLogsConfig(): void;
    get logsConfigInput(): CodebuildProjectLogsConfig[] | undefined;
    private _secondaryArtifacts?;
    get secondaryArtifacts(): CodebuildProjectSecondaryArtifacts[];
    set secondaryArtifacts(value: CodebuildProjectSecondaryArtifacts[]);
    resetSecondaryArtifacts(): void;
    get secondaryArtifactsInput(): CodebuildProjectSecondaryArtifacts[] | undefined;
    private _secondarySources?;
    get secondarySources(): CodebuildProjectSecondarySources[];
    set secondarySources(value: CodebuildProjectSecondarySources[]);
    resetSecondarySources(): void;
    get secondarySourcesInput(): CodebuildProjectSecondarySources[] | undefined;
    private _source;
    get source(): CodebuildProjectSource[];
    set source(value: CodebuildProjectSource[]);
    get sourceInput(): CodebuildProjectSource[];
    private _vpcConfig?;
    get vpcConfig(): CodebuildProjectVpcConfig[];
    set vpcConfig(value: CodebuildProjectVpcConfig[]);
    resetVpcConfig(): void;
    get vpcConfigInput(): CodebuildProjectVpcConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
