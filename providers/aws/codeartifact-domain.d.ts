import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactDomainConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html#domain CodeartifactDomain#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html#encryption_key CodeartifactDomain#encryption_key}.
     */
    readonly encryptionKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html#tags CodeartifactDomain#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html#tags_all CodeartifactDomain#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html aws_codeartifact_domain}.
 */
export declare class CodeartifactDomain extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html aws_codeartifact_domain} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodeartifactDomainConfig);
    get arn(): string;
    get assetSizeBytes(): number;
    get createdTime(): string;
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    private _encryptionKey?;
    get encryptionKey(): string;
    set encryptionKey(value: string);
    resetEncryptionKey(): void;
    get encryptionKeyInput(): string | undefined;
    get id(): string;
    get owner(): string;
    get repositoryCount(): number;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
