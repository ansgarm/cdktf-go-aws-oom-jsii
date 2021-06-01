import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#description CodeartifactRepository#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#domain CodeartifactRepository#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#domain_owner CodeartifactRepository#domain_owner}.
     */
    readonly domainOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#repository CodeartifactRepository#repository}.
     */
    readonly repository: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#tags CodeartifactRepository#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#tags_all CodeartifactRepository#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * external_connections block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#external_connections CodeartifactRepository#external_connections}
     */
    readonly externalConnections?: CodeartifactRepositoryExternalConnections[];
    /**
     * upstream block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#upstream CodeartifactRepository#upstream}
     */
    readonly upstream?: CodeartifactRepositoryUpstream[];
}
export interface CodeartifactRepositoryExternalConnections {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#external_connection_name CodeartifactRepository#external_connection_name}.
     */
    readonly externalConnectionName: string;
}
export interface CodeartifactRepositoryUpstream {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#repository_name CodeartifactRepository#repository_name}.
     */
    readonly repositoryName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html aws_codeartifact_repository}.
 */
export declare class CodeartifactRepository extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html aws_codeartifact_repository} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodeartifactRepositoryConfig);
    get administratorAccount(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    private _domainOwner?;
    get domainOwner(): string;
    set domainOwner(value: string);
    resetDomainOwner(): void;
    get domainOwnerInput(): string | undefined;
    get id(): string;
    private _repository;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
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
    private _externalConnections?;
    get externalConnections(): CodeartifactRepositoryExternalConnections[];
    set externalConnections(value: CodeartifactRepositoryExternalConnections[]);
    resetExternalConnections(): void;
    get externalConnectionsInput(): CodeartifactRepositoryExternalConnections[] | undefined;
    private _upstream?;
    get upstream(): CodeartifactRepositoryUpstream[];
    set upstream(value: CodeartifactRepositoryUpstream[]);
    resetUpstream(): void;
    get upstreamInput(): CodeartifactRepositoryUpstream[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
